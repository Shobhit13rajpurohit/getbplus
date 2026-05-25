import ShellPage from '../../ShellPage';

export default function CityGuide({ params }: { params: { city: string } }) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return (
    <ShellPage
      title={`Paying like a local in ${cityName}`}
      description={`A complete guide to navigating transport, markets, and street food in ${cityName} using the GetB+ app.`}
      phase="City Guides"
    />
  );
}
