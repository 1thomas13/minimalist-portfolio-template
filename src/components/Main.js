import React from 'react';
import {HStack, Box, Heading, VStack, Button, Icon, Tooltip, Text, Spacer, Flex} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJsSquare, FaCss3, FaHtml5 } from 'react-icons/fa';
import { SiNextDotJs, SiMongodb, SiMysql } from 'react-icons/si';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Main = () => {
  const animationDescription = {
    offscreen: {
      x: -1300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        delay: 0.4,
        duration: 1.3,
      },
    },
  };

  const animationMain = {
    offscreen: {
      y: -1300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        delay: 0.4,
        duration: 1.3,
      },
    },
  };

  return (
    <>
      <Flex
        p={2}
        position={{ base: 'block', md: 'fixed' }}
        zIndex={1000}
        width="100%"
      >
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
      <VStack
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        m={2}
        
        spacing={8}
        height="80vh"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Heading
          as={motion.h1}
          variants={animationMain}
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          fontWeight="extrabold"
          textAlign="center"
        >
          John Example
          <br></br>
          <Text
            fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
          >
            Web Developer
          </Text>
        </Heading>

        <motion.div 
          variants={animationDescription}
          
        >
          <Text textAlign="justify">
            I’m developer located in Argentina. Mainly focused on the MERN stack.
            <br></br>
            My goal is to learn more about this world, the world of technology.
            <br></br>
          </Text>
         
        </motion.div>

        <Button
          as={motion.a}
          variants={animationMain}
          my={8}
          href="resume.pdf"
          download="resume.pdf"
          variant="outline"
        >
          View Resume
        </Button>

        <HStack
          as={motion.div}
          variants={animationMain}
          justifyContent="center"
          alignItems="center"
        >
          <Tooltip label="HTML">
            <Box p={{ base: 0, md: 1 }}>
              <Icon
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                as={FaHtml5}
              />
            </Box>
          </Tooltip>

          <Tooltip label="CSS">
            <Box p={{ base: 0, md: 1 }}>
              <Icon
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                as={FaCss3}
              />
            </Box>
          </Tooltip>

          <Tooltip label="JavaScript">
            <Box p={{ base: 0, md: 1 }}>
              <Icon
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                as={FaJsSquare}
              />
            </Box>
          </Tooltip>

          <Tooltip label="React">
            <Box p={{ base: 0, md: 1 }}>
              <Icon
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                as={FaReact}
              />
            </Box>
          </Tooltip>

          <Tooltip label="Next">
            <Box p={{ base: 0, md: 1 }}>
              <Icon
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                as={SiNextDotJs}
              />
            </Box>
          </Tooltip>

          <Tooltip label="Node">
            <Box p={{ base: 0, md: 1 }}>
              <Icon
                w={{ base: 8, md: 10 }}
                h={{ base: 8, md: 10 }}
                as={FaNodeJs}
              />
            </Box>
          </Tooltip>

          <Tooltip label="MongoDB">
            <Box p={{ base: 0, md: 1 }}>
              <Icon w={10} h={10} as={SiMongodb} />
            </Box>
          </Tooltip>

          <Tooltip label="Mysql">
            <Box p={{ base: 0, md: 1 }}>
              <Icon w={10} h={10} as={SiMysql} />
            </Box>
          </Tooltip>
        </HStack>
      </VStack>
    </>
  );
};
