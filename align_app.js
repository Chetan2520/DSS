const fs = require('fs');
const path = require('path');

// 1. Rename src/app/blogs/[id] to src/app/blog/[title]
const oldBlogDir = 'f:/Dss-Project/dss-next/src/app/blogs/[id]';
const newBlogDir = 'f:/Dss-Project/dss-next/src/app/blog/[title]';
if (fs.existsSync(oldBlogDir)) {
    fs.mkdirSync(path.dirname(newBlogDir), { recursive: true });
    fs.renameSync(oldBlogDir, newBlogDir);
}

// 2. Create /contact-us
const contactDir = 'f:/Dss-Project/dss-next/src/app/contact-us';
if (!fs.existsSync(contactDir)) {
    fs.mkdirSync(contactDir, { recursive: true });
    fs.writeFileSync(path.join(contactDir, 'page.jsx'), 
`import LetsConnect from "@/components/LetsConnect";
export const metadata = { title: "Contact Us | Digital Success Solutions" };
export default function ContactUsRoute() { return <LetsConnect />; }`);
}

// 3. Fix Layout properties
const clientLayoutPath = 'f:/Dss-Project/dss-next/src/components/ClientLayout.jsx';
if (fs.existsSync(clientLayoutPath)) {
    let clContent = fs.readFileSync(clientLayoutPath, 'utf8');
    // Ensure we hide Navbar and Footer on /adminsurendraseo
    if (!clContent.includes('const isAdmin')) {
        clContent = clContent.replace('const pathname = usePathname();', 'const pathname = usePathname();\n  const isAdmin = pathname === "/adminsurendraseo";');
        clContent = clContent.replace('<Navbar />', '{!isAdmin && <Navbar />}');
        clContent = clContent.replace('<CreativeFooter />', '{!isAdmin && <CreativeFooter />}');
        fs.writeFileSync(clientLayoutPath, clContent, 'utf8');
    }
}

// 4. Fix Links and Duplicates across all components
function fixLinks(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixLinks(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Remove purely duplicate Link imports completely if they are exact multiline matches
            // E.g.
            // import Link from 'next/link';
            // import Link from "next/link";
            const i1 = content.indexOf("import Link from 'next/link';");
            const i2 = content.indexOf('import Link from "next/link";');
            if (i1 !== -1 && i2 !== -1) {
                // Remove one of them
                content = content.replace("import Link from 'next/link';", "");
                modified = true;
            }
            
            // Duplicate of same type
            const counts = (content.match(/import Link from ["']next\/link["'];?/g) || []).length;
            if (counts > 1) {
                let first = true;
                content = content.replace(/import Link from ["']next\/link["'];?/g, (match) => {
                    if (first) { first = false; return match; }
                    return '';
                });
                modified = true;
            }

            // <Link to="..." to <Link href="..."
            if (content.includes('to=') && content.includes('<Link')) {
                // Only replace `to={` or `to="` or `to='`
                content = content.replace(/<Link([^>]*)to=([{"'])/g, '<Link$1href=$2');
                content = content.replace(/<NavLink([^>]*)to=([{"'])/g, '<Link$1href=$2');
                content = content.replace(/<\/NavLink>/g, '</Link>');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed Links / Dupes in:', file);
            }
        }
    }
}

fixLinks('f:/Dss-Project/dss-next/src/components');
console.log('App alignment and Link fixes complete.');
