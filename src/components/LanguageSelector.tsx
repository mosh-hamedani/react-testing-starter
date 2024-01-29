import { Select } from "@radix-ui/themes";
import useLanguage from "../hooks/useLanguage";
import { Language } from "../providers/language/type";

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <Select.Root
      defaultValue={currentLanguage}
      onValueChange={(lang) => changeLanguage(lang as Language)}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="en">EN</Select.Item>
        <Select.Item value="es">ES</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default LanguageSelector;
