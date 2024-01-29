import { Button, Dialog, Flex } from "@radix-ui/themes";

const CancelOrderButton = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Cancel Order</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Confirm</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Are you sure you want to cancel this order?
        </Dialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              No
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Yes</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CancelOrderButton;
