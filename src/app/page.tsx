import React from 'react';
import './globallanding.css';

const WallyFeaturesContainer: React.FC = () => (
  <section className="relative text-center bg-white">
    <div className="relative bg-center bg-no-repeat bg-cover" style={{ backgroundSize: '3000px', backgroundPosition: 'top -450px left -920px' }}>
    <img
        src="/wallyblanco.png"
        alt="wally en blanco"
        className="absolute left-1/2 transform -translate-x-1/2"
        style={{
          zIndex: 10,
          width: '700px',
          top: '13%',
        }}
      />
      <WallySection />
      <Features />
    </div>
  </section>
);


const WallySection: React.FC = () => (
  <div className="py-16">
    <header className="absolute top-0 left-0 w-full p-4 flex justify-between">
      <nav className="flex gap-8">
        <a href="#project" className="text-white font-medium">About the Project</a>
        <a href="#features" className="text-white font-medium">Features</a>
        <a href="#about" className="text-white font-medium">About Us</a>
      </nav>
    </header>
    <div className="w-full max-w-lg mx-auto pt-32 p-6">
    <img src="/wallyblanco.png" alt="Wally YOUR ALLIE" className="w-150 mx-auto" style={{ marginTop: '60px' }} />
    </div>


  </div>
);

const Features: React.FC = () => (
  <section 
    id="project" 
    className="text-center pb-16" 
    style={{ paddingTop: '20rem', paddingBottom: '15rem', minHeight: '100vh' }}
  >
    <div className="flex items-center justify-center">
      <div className="p-10 max-w-2xl flex-10">
        <div className="flex items-center space-x-1 mb-1">
          <img src='/wallynegro.png' alt="Wally Logo" width={500} height={180} />
          <p className="text-lg items-left font-light text-gray-900 max-w-sm">
            is about revolutionizing the way we think about support.
          </p>
        </div>
        <p className="text-lg font-semibold text-gray-900">Your IA support agent</p>
      </div>
    </div>
  </section>
);


const ScreenshotSection = () => (
  <section id= "features" className="flex justify-center py-16 bg-white">
    <div className="absolute top-0 left-0 -z-10 transform translate-x-[-20%] translate-y-[-20%]">
      <img
        src="/mancha.png"
        alt="Background Shape"
        width={400}
        height={400}
        className="opacity-100"
      />
    </div>
    <div className="">
      <img 
        src="/chatswally.png"
        alt="Screenshot of Wally"
        width={600} 
        height={300} 
        className="rounded-lg shadow-lg"
      />
    </div>
  </section>
);

const TeamSection: React.FC = () => (
  <section id="about" 
  className="text-center py-16 bg-white"
  style={{ paddingTop: '11rem', paddingBottom: '15rem' }}
  >
    <h2 className="text-3xl font-semibold">
        <span style={{ color: '#B304E6' }}>M</span>
        <span style={{ color: '#C00ED9' }}>e</span>
        <span style={{ color: '#CC18CC' }}>e</span>
        <span style={{ color: '#D923BF' }}>t</span>
        <span style={{ color: '#E62DB2' }}> </span>
        <span style={{ color: '#F238A5' }}>o</span>
        <span style={{ color: '#F84197' }}>u</span>
        <span style={{ color: '#F94C8F' }}>r</span>
        <span style={{ color: '#FB5687' }}> </span>
        <span style={{ color: '#FC617F' }}>T</span>
        <span style={{ color: '#FF5778' }}>e</span>
        <span style={{ color: '#FF5778' }}>a</span>
        <span style={{ color: '#FF5778' }}>m</span>
      </h2>
    <div className="flex justify-center mt-8 gap-8">

      <div className="flex flex-col items-center bg-white border border-black shadow-md p-6 rounded-lg h-80">
        <div className="w-32 h-32 flex items-center justify-center">
          <img src="/path/to/image1.png" alt="Ali" className="w-28 h-28 rounded-full" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Alison Alvez</h3>
        <p className="text-gray-600">Project Manager</p>
        <p className="text-gray-600">AI Specialist</p>
        <p className="text-gray-600">Frontend Developer</p>
      </div>

      <div className="flex flex-col items-center bg-white border border-black shadow-md p-6 rounded-lg h-80">
        <div className="w-32 h-32 flex items-center justify-center">
          <img src="/path/to/image2.png" alt="Neca" className="w-28 h-28 rounded-full" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Ignacio Necasek</h3>
        <p className="text-gray-600">Fullstack Developer</p>
      </div>

      <div className="flex flex-col items-center bg-white border border-black shadow-md p-6 rounded-lg h-80">
        <div className="w-32 h-32 flex items-center justify-center">
          <img src="/gabo.png" alt="Gabo" className="w-28 h-28 rounded-full" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Gabriel Morffe</h3>
        <p className="text-gray-600">Fullstack Developer</p>
      </div>
    </div>
  </section>
);



const Footer: React.FC = () => (
  <footer className="text-center py-8 bg-pink-300 text-gray">
    <p>&copy; 2024 Wally by Willinn - Zonamerica. All rights reserved.</p>
  </footer>
);

export default function Home() {
  return (
    <div className="bg-white">
      <WallyFeaturesContainer />
      <ScreenshotSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
