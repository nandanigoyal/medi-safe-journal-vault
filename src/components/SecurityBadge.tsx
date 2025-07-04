
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const SecurityBadge = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center space-x-2">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              🔐 AES-256 Encrypted
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              HIPAA Compliant
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="max-w-xs">
            <p className="font-semibold mb-2">Security Features:</p>
            <ul className="text-sm space-y-1">
              <li>• End-to-end encryption</li>
              <li>• Biometric authentication</li>
              <li>• Access logs tracking</li>
              <li>• GDPR & NDHM compliant</li>
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
