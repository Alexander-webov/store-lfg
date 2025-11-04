import { Input } from "../ui/input";
import { Label } from "../ui/label";

function ImageInput() {
  const name = "image";
  return (
    <div>
      <Label htmlFor={name}>Iamge</Label>
      <Input id={name} name={name} type="file" required accept="image/*" />
    </div>
  );
}

export default ImageInput;
