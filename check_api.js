
const axios = require('axios');

async function check() {
  try {
    const res = await axios.get('https://digitalsuccesssolutions.in/php_backend/api/read.php');
    let data = res.data;
    if (typeof data === 'string' && data.includes('Connected successfully')) {
      data = JSON.parse(data.replace('Connected successfully', '').trim());
    }
    console.log('Total blogs:', data.length);
    console.log('Slugs:', data.map(b => b.slug));
  } catch (e) {
    console.error(e);
  }
}

check();
