import MenuItem from '../menu/MenuItem';
import SectionHeaders from './SectionHeaders';

export default function HomeMenu() {
  return (
    <section>
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="absolute -top-8 left-0 z-0 h-48 w-48">
          <img
            src={'/sallad1.png'}
            alt="sallad"
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
        <div className="absolute -top-8 -right-8 z-0 h-40 w-40">
          <img
            src={'/sallad2.png'}
            alt="sallad"
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders subHeader={'Check Out'} mainHeader={'Menu'} />
      </div>
      <div className="relative z-10 grid grid-cols-3 gap-4 px-8">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
