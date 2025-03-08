import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Complaints = () => {
  return (
    <>
      <section className="pb-4 md:p-20 flex flex-col gap-4 items-center justify-center">
        <div className="text-xl md:ext-2xl font-bold">
          Complaints / Suggestions
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-6">
          <div className="flex flex-col gap-3 w-[280px]  md:w-[600px]">
            <Input type="text" placeholder="Full Name" />
            <div className="flex gap-4">
              <Input type="text" placeholder="Contact Infromation" />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select the type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="complaint">Complaint</SelectItem>
                  <SelectItem value="suggestion">Suggestion</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Address" />
          </div>
          <div className="flex flex-col gap-4">
            <Textarea
              className="w-[280px] md:w-[400px] h-[180px]"
              placeholder="Type your message here."
            />
            <div className="flex gap-2">
              <Button>Cancel</Button>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
