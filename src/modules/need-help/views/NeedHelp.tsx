import { Box, Center, Text } from "@chakra-ui/react"
import Header from "@/modules/landing/components/Navbar"
import NeedHelpImage from '../../../../public/need-help.jpg'
import Image from "next/image"
export default function NeedHelp(){
    return(
        <Box>
            <Header/>

            <div
      style={{
        // use relative position for the parent div
        position: "relative",
        width: "100vw",
        height: "60vh",
      }}
    >
      <Image
        src={NeedHelpImage}
        fill={true}
        alt={"Background Image"}
      />

      {/* The child element */}
      <div
        style={{
          // use absolute position for the child element
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // use higher zIndex than the image
          zIndex: 4,
        //   background: "yellow",
        //   padding: "30px",
        //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color: "black",
          }}
        >
          Every One Needs Help
        </h1>
      </div>
    </div>

            
        </Box>
    )
}