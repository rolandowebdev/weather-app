export default function Celcius({ units, setUnits }) {
  const handleUnitsChange = (e) => {
    e.preventDefault();
    const selectUnits = e.currentTarget.name;
    if (units !== selectUnits) setUnits(selectUnits);
  };
  return (
    <button
      name='metric'
      onClick={handleUnitsChange}
      className='btn z-10 btn-square text-xl bg-black/50 hover:bg-black backdrop-blur-sm border-black/50'>
      °C
    </button>
  );
}
