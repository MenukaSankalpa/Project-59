import { useApp, countries } from "@/contexts/AppContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CountrySelector = () => {
  const { selectedCountry, setSelectedCountry } = useApp();

  const countryOptions = [
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  ];

  return (
    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
      <SelectTrigger className="w-48 bg-background border-border">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span>{countryOptions.find(c => c.code === selectedCountry)?.flag}</span>
            <span className="text-sm">{countryOptions.find(c => c.code === selectedCountry)?.name}</span>
            <span className="text-xs text-muted-foreground">
              ({countries[selectedCountry as keyof typeof countries]?.symbol})
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-popover border-border">
        {countryOptions.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            <div className="flex items-center gap-2">
              <span>{country.flag}</span>
              <span>{country.name}</span>
              <span className="text-xs text-muted-foreground">
                ({countries[country.code as keyof typeof countries]?.symbol})
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountrySelector;