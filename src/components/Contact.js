import React, { useRef, useState } from 'react';
import {VStack, HStack, Heading, Stack, Input, Textarea, Button, Icon,Text, useToast } from '@chakra-ui/react';
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  
  const variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        delay:0.4,
        duration: 1.3,
      },
    },
  };

  const variantsFooter = {
    offscreen: {
      x: -1300,
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        delay:0.1,
        duration: 1.8,
      },
    },
  };
  
  const form = useRef()
  const toast = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(name === '' || email === '' || msg === ''){
      toast({
        title: 'Please fill in all fields',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      return
    } 
    
    emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
      toast({
        title: 'Message Sent Successfully.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }, (error) => {
      toast({
        title: 'An error occurred please try again later',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    });

    setName('')
    setEmail('')
    setMsg('')
  }

  return (
    <>
      <VStack
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        spacing={8}
        align="center"
        justify='center'
        height='90vh'
      >
        <Heading as={motion.h3} variants={variants}>
          Contact
        </Heading>

        
          <Stack
            as={motion.form}
            ref={form}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            width={{base:64, md:96}}
            spacing={6}
            display='flex'
            alignItems='center'
            justifyContent='center'
            onSubmit={handleSubmit}
          >
            <Input
             variants={variants} 
              p="2" 
              name="user_name"
              type="string" 
              variant="flushed" 
              placeholder="Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              variants={variants}
              p="2"
              type="email"
              name="user_email"
              variant="flushed"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea 
              name="message" 
              resize='none' 
              as={motion.textarea} 
              variants={variants} 
              p="2" 
              placeholder="Your Message"
              variant="flushed" 
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />

            <Button 
              type="submit"
              variants={variants}
              margin='50px'
              width="200px" 
              maxW="50%" 
              variant="outline" 
            >
              Submit
            </Button>
              
            
          </Stack>
        

        <HStack 
          as={motion.div}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          spacing={8}
         >
          <motion.div variants={variants}
            onClick={() => window.open('https://example.com')}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.3 }}
          >
            <Icon cursor="pointer" h={10} w={10} as={FaLinkedin} />
          </motion.div>
          <motion.div variants={variants}
            onClick={() => window.open('https://example.com')}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.3 }}
          >
            <Icon cursor="pointer" h={10} w={10} as={FaTwitterSquare} />
          </motion.div>
          <motion.div variants={variants}
            onClick={() => window.open('https://example.com')}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.3 }}
          >
            <Icon cursor="pointer" h={10} w={10} as={FaGithubSquare} />
          </motion.div>
        </HStack>
      </VStack>
      
      <Stack
        as={motion.footer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        h="10vh"
        justify="center"
        align="center"
      >
        <motion.div variants={variantsFooter} >
          <Text textAlign='justify' fontWeight={500} as='em' fontSize={{base:'xs', md:'md'}}> Made in Chakra and Framer Motion by Thomas Barreto</Text>
        </motion.div> 
      </Stack>
    </>
  );
};
