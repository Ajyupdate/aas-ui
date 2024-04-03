import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const redirectToGoogleAuth = async () => {
    try {
      const response = await fetch("http://localhost:3001/auth/google");
      if (response.ok) {
        const data = await response.json();
       
        // Redirect to Google authentication URL
        window.location.href = data.url;
      } else {
        // Handle error
        console.error("Error redirecting to Google authentication");
      }
    } catch (error) {
      console.error("Error redirecting to Google authentication:", error);
    }
  };
  return (
    <Box>
      Sign in with
      <Box>
        <Button onClick={redirectToGoogleAuth}>Google</Button>
      </Box>
      <Box>
        <Button>Google</Button>
      </Box>
    </Box>
  );
}
