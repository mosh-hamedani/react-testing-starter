import { Select } from "@radix-ui/themes";

interface Props {
  onChange: (status: string) => void;
}

const OrderStatusSelector = ({ onChange }: Props) => {
  return (
    <Select.Root defaultValue="new" onValueChange={onChange}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Status</Select.Label>
          <Select.Item value="new">New</Select.Item>
          <Select.Item value="processed">Processed</Select.Item>
          <Select.Item value="fulfilled">Fulfilled</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default OrderStatusSelector;
