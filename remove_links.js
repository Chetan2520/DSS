const fs = require('fs');
const path = require('path');

function removeDuplicates(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            removeDuplicates(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Remove EXACT lines
            // Example:
            // import Link from 'next/link';
            // import Link from "next/link";
            if (content.includes("import Link from 'next/link';") && content.includes('import Link from "next/link";')) {
                // Erase the double quote version
                content = content.replace('import Link from "next/link";', '');
                modified = true;
            }

            // If there's multiple of the double quotes
            const instancesDouble = (content.match(/import Link from "next\/link";/g) || []).length;
            if (instancesDouble > 1) {
                let first = true;
                content = content.replace(/import Link from "next\/link";/g, (match) => {
                    if (first) { first = false; return match; }
                    return '';
                });
                modified = true;
            }
                                                                                                                  
            // If there's multiple of the single quotes
            const instancesSingle = (content.match(/import Link from 'next\/link';/g) || []).length;
            if (instancesSingle > 1) {
                let first = true;
                content = content.replace(/import Link from 'next\/link';/g, (match) => {
                    if (first) { first = false; return match; }
                    return '';
                });
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Cleaned duplicates from: ${file}`);
            }
        }
    }
}

removeDuplicates('f:/Dss-Project/dss-next/src/components');
console.log('Finished removing duplicates.');
