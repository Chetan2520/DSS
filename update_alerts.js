const fs = require('fs');

// Update WhyChooseUs.jsx
let content = fs.readFileSync('src/app/landing-page/components/WhyChooseUs.jsx', 'utf8');

content = content.replace('alert("Thanks! We will contact you soon.");', '');
content = content.replace("alert('Failed to submit. Please try again.');", "setStatus('error');");
content = content.replace("alert('Something went wrong. Please check your connection.');", "setStatus('error');");

const oldFormStart = `<form onSubmit={handleSubmit} className="space-y-4">`;
const newFormStart = `{submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-[#FF6900]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-[#FF6900]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-white text-2xl font-semibold mb-2">Thank You!</h4>
                    <p className="text-white/80 text-sm">Our team will contact you shortly.</p>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-4">`;

content = content.replace(oldFormStart, newFormStart);

const oldFormEnd = `<span>Your information is 100% secure. No spam.</span>
                </div>`;
const newFormEnd = `<span>Your information is 100% secure. No spam.</span>
                </div>
                )}
                {status === 'error' && <p className="text-red-400 text-sm text-center mt-4">Failed to submit. Please try again.</p>}`;

content = content.replace(oldFormEnd, newFormEnd);

fs.writeFileSync('src/app/landing-page/components/WhyChooseUs.jsx', content);
console.log('WhyChooseUs.jsx updated successfully');

// Update LeadForm.jsx
let content2 = fs.readFileSync('src/app/landing-page/components/LeadForm.jsx', 'utf8');

content2 = content2.replace("alert('Failed to submit. Please try again.');", "");
content2 = content2.replace("alert('Something went wrong. Please check your connection.');", "");

const oldBtnArea = `{status !== 'submitting' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>`;
const newBtnArea = `{status !== 'submitting' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-sm text-center mt-2 font-medium">Failed to submit. Please check your connection and try again.</p>}
                </form>`;
content2 = content2.replace(oldBtnArea, newBtnArea);

fs.writeFileSync('src/app/landing-page/components/LeadForm.jsx', content2);
console.log('LeadForm.jsx updated successfully');
