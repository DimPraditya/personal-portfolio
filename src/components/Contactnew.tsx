import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
}

const Contact = ({
  title = "Contact Me",
  description = "I'm Currently Available for Freelance Work",
  emailLabel = "Email",
  emailDescription = "I respond to all emails within 24 hours.",
  email = "dpraditya1704@gmail.com",
  officeLabel = "Office",
  officeDescription = "Drop by my office for a chat.",
  officeAddress = "Plaza Sudirman 12a Floor, Setiabudi, Jakarta",
  phoneLabel = "Phone",
  phoneDescription = "I'm available Everyday, 9am-5pm.",
  phone = "+62 877 8034 5010",
}: ContactProps) => {
  return (
    <section id="Contact" className="bg-auto py-20 px-4 sm:px-8 md:px-20">
      <div className="flex flex-col text-center items-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>
              Please fill in the form below to get in touch with me
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label>Full Name *</Label>
                  <Input
                    id="string"
                    type="string"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="Email">Email *</Label>
                  <Input
                    id="Email"
                    type="Email"
                    required
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Message *</Label>
                  <Textarea required placeholder="Your message here..." />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full cursor-pointer">
              Send Message
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-14 flex flex-col md:flex-row md:justify-center md:items-start gap-8">
          {/* Contact Detail: Email */}
          <div className="flex flex-col items-center text-center md:text-left">
            <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" color="black" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline break-all"
            >
              {email}
            </a>
          </div>

          {/* Contact Detail: Office */}
          <div className="flex flex-col items-center text-center md:text-left">
            <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" color="black" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground">{officeDescription}</p>
            <p className="font-semibold">{officeAddress}</p>
          </div>

          {/* Contact Detail: Phone */}
          <div className="flex flex-col items-center text-center md:text-left">
            <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" color="black" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
            <a
              href={`tel:${phone}`}
              className="font-semibold hover:underline"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
