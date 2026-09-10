const fs = require('fs');
const path = require('path');

const srcDir = 'f:/Dss-Project/dss-live/src/components';
const destDir = 'f:/Dss-Project/dss-next/src/components';
const mainSrcDir = 'f:/Dss-Project/dss-live/src';

// Skip files we've already converted properly
const skipFiles = [
    'Navbar.jsx', 'Preloader.jsx', 'CustomCursor.jsx', 'CreativeFooter.jsx', 
    'DssAbout.jsx', 'Achivements.jsx', 'Deconstructed.jsx', 'WhyChooseDSS.jsx', 
    'Clients.jsx', 'HeroBg.jsx', 'PremiumHero.jsx', 'PrivacyPolicy.jsx', 'TermsAndConditions.jsx',
    'ClientLayout.jsx'
];

function migrateFile(srcPath, destPath, file) {
    if (!file.endsWith('.js') && !file.endsWith('.jsx')) return;
    if (skipFiles.includes(file)) return;

    let content = fs.readFileSync(srcPath, 'utf8');

    // Add use client
    if (!content.includes('"use client"') && !content.includes("'use client'") && content.includes('react')) {
        content = '"use client";\n' + content;
    }

    // Replace react-router-dom
    if (content.includes('react-router-dom')) {
        content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]react-router-dom['"];?/g, (match, importsStr) => {
            const imports = importsStr.split(',').map(i => i.trim());
            let result = '';
            
            if (imports.includes('Link') || imports.includes('NavLink')) {
                result += `import Link from 'next/link';\n`;
            }
            
            const routerImports = [];
            if (imports.includes('useNavigate')) routerImports.push('useRouter');
            if (imports.includes('useLocation')) routerImports.push('usePathname');
            if (imports.includes('useParams')) routerImports.push('useParams');
            
            if (routerImports.length > 0) {
                result += `import { ${routerImports.join(', ')} } from 'next/navigation';\n`;
            }
            
            // If there's something else, just ignore or it will blow up, which is fine for now
            return result;
        });

        // Replace usages
        content = content.replace(/useNavigate\(\)/g, 'useRouter()');
        content = content.replace(/useLocation\(\)/g, 'usePathname()'); // Does not have hash, but sufficient for simple uses
    }

    // Ensure directory exists
    const dirname = path.dirname(destPath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }

    fs.writeFileSync(destPath, content, 'utf8');
    console.log('Migrated:', file);
}

// 1. Migrate components
const components = fs.readdirSync(srcDir);
for (const file of components) {
    if (fs.statSync(path.join(srcDir, file)).isFile()) {
        migrateFile(path.join(srcDir, file), path.join(destDir, file), file);
    }
}

// 2. Migrate pages/main components
const dirsToMigrate = ['.'];
for (const file of fs.readdirSync(mainSrcDir)) {
    if (fs.statSync(path.join(mainSrcDir, file)).isFile() && (file.endsWith('.jsx') || file.endsWith('.js'))) {
        if (!['App.jsx', 'main.jsx', 'index.css'].includes(file)) {
            // These might be pages like Home.jsx, Webdev.jsx 
            // We should put them in a different dir or just components for now
            // Actually they are components as per dss-live structure
            migrateFile(path.join(mainSrcDir, file), path.join(destDir, 'pages_old', file), file);
        }
    }
}
