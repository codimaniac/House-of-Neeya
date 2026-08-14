import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/SelectInput";
import Textarea from "@/components/ui/TextArea";

const ContactForm = () => {
  return (
    <SectionLayout className="flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col w-full md:w-auto md:min-w-100">
        <SectionLayout.Tag>Reach Us</SectionLayout.Tag>
        <SectionLayout.Heading className="leading-normal">
          We&apos;d love to <br /> hear from you.
        </SectionLayout.Heading>
        <hr className="w-20 border-primary" />
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-lg px-6 py-15 w-full md:w-auto">
        <SectionLayout.Heading className="text-[clamp(18px,14vw,24px)] font-semibold">
          Send a Message
        </SectionLayout.Heading>
        <hr className="w-20 border-primary" />
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <Input
            type="text"
            label="Name *"
            placeholder="Your full name"
            className="min-w-70"
          />
          <Input
            type="email"
            label="Email *"
            placeholder="johndoe@email.com"
            className="min-w-70"
          />
        </div>
        <Select label="Subject">
          <option>Select a topic</option>
          <option>Order Enquiry</option>
          <option>Returns & Exchanges</option>
          <option>Product Question</option>
          <option>Collaboration</option>
          <option>Others</option>
        </Select>
        <Textarea label="Message" />
        <Button>Submit</Button>
      </div>
    </SectionLayout>
  );
};

export default ContactForm;
