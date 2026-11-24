import LiquidEther from './LiquidEther';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'About SunTzv', link: 'https://github.com/SunTzv' },
  { label: 'pdfilter', ariaLabel: 'pdfilter repository', link: 'https://github.com/SunTzv/pdfilter' },
  { label: 'pratibimb', ariaLabel: 'pratibimb repository', link: 'https://github.com/SunTzv/pratibimb' },
  { label: 'Contact', ariaLabel: 'Get in touch via email', link: 'mailto:suntzu@ncrypt.net.in' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/SunTzv' },
  { label: 'Instagram', link: 'https://instagram.com/im.rishabh_ofc' },
  { label: 'Email', link: 'mailto:suntzu@ncrypt.net.in' }
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden">
      {/* Background LiquidEther */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-auto">
        <LiquidEther
          colors={["#0e7490", "#2dd4bf", "#ccfbf1"]}
          mouseForce={15}
          cursorSize={65}
          persistence={0.75}
          autoDemo={true}
          autoSpeed={1.5}
          autoIntensity={2.2}
          intensity={0.9}
          viscosity={0.36}
          bounceEdges
        />
      </div>

      {/* StaggeredMenu Navigation */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={[]}
        accentColor="#2dd4bf"
        isFixed={true}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  );
}
