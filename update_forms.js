const fs = require('fs');
let content = fs.readFileSync('src/app/landing-page/components/LeadForm.jsx', 'utf8');

const oldSubmit = `  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    setSubmitted(true);
  };`.replace(/\r?\n/g, '\n');

const newSubmit = `  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://digitalsuccesssolutions.in/php/ayurveda_lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'Ayurveda Landing Page Audit Request' }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setSubmitted(true);
        setStatus('success');
      } else {
        setStatus('error');
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('Something went wrong. Please check your connection.');
    }
  };`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(oldSubmit, newSubmit);

const oldBtn = `                  <button
                    type="submit"
                    className="w-full bg-[#2A3B30] text-white px-8 py-4 rounded-xl font-semibold uppercase tracking-widest text-sm hover:bg-[#18221B] transition-all flex items-center justify-center gap-2 group shadow-xl"
                  >
                    REQUEST MY AUDIT
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>`.replace(/\r?\n/g, '\n');

const newBtn = `                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#2A3B30] text-white px-8 py-4 rounded-xl font-semibold uppercase tracking-widest text-sm hover:bg-[#18221B] transition-all flex items-center justify-center gap-2 group shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'SUBMITTING...' : 'REQUEST MY AUDIT'}
                    {status !== 'submitting' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>`;

content = content.replace(oldBtn, newBtn);

fs.writeFileSync('src/app/landing-page/components/LeadForm.jsx', content);
console.log('LeadForm.jsx updated successfully');

// Also update WhyChooseUs.jsx
let content2 = fs.readFileSync('src/app/landing-page/components/WhyChooseUs.jsx', 'utf8');

const oldSubmit2 = `  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add form submission logic here
  };`.replace(/\r?\n/g, '\n');

const newSubmit2 = `  const [status, setStatus] = useState('idle');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://digitalsuccesssolutions.in/php/ayurveda_lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'Ayurveda Free Audit (WhyChooseUs)' }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setSubmitted(true);
        setStatus('success');
        setFormData({ name: '', phone: '', website: '' }); // Reset
        alert("Thanks! We will contact you soon.");
      } else {
        setStatus('error');
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('Something went wrong. Please check your connection.');
    }
  };`;

content2 = content2.replace(/\r\n/g, '\n');
content2 = content2.replace(oldSubmit2, newSubmit2);

const oldBtn2 = `                  <button
                    type="submit"
                    className="w-full bg-[#FF6900] hover:bg-[#e55e00] text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group mt-2 shadow-lg shadow-[#FF6900]/20"
                  >
                    Get Free Audit Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>`.replace(/\r?\n/g, '\n');

const newBtn2 = `                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#FF6900] hover:bg-[#e55e00] text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group mt-2 shadow-lg shadow-[#FF6900]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Get Free Audit Now'}
                    {status !== 'submitting' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>`;

content2 = content2.replace(oldBtn2, newBtn2);

fs.writeFileSync('src/app/landing-page/components/WhyChooseUs.jsx', content2);
console.log('WhyChooseUs.jsx updated successfully');
