import { ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "~/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/shadcn/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="size-8 text-primary" />
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-4xl text-transparent">
                Contact
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              お問い合わせは以下の方法でお願いします。
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="group hover:-translate-y-1 relative overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                    <ExternalLink className="h-6 w-6 text-primary" />
                  </div>
                  X (Twitter)
                </CardTitle>
                <CardDescription>
                  SNSでのお問い合わせはこちらから
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a
                    href="https://x.com/kjfsm4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    @kjfsm4
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
