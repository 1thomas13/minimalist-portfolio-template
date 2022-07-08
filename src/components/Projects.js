import React from 'react';
import { GridItem, HStack, Heading, VStack, Stack, Text, Spacer, Grid ,Link, Tag, Icon, Button } from '@chakra-ui/react';
import {FaExternalLinkAlt} from 'react-icons/fa'; 
import {FiGithub} from 'react-icons/fi';
import { projects } from '../data';
import {motion} from 'framer-motion';

export const Projects = () => {

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

  return (
    <Stack alignItems='center'>
      <VStack as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }} 
            borderRadius='3xl' >
        <Heading as={motion.div} variants={variants} mb='16' >
          Projects
        </Heading>
        <Grid 
          maxW={'700px'} 
          gap={6} 
          templateColumns={{base: 'repeat(1, 1fr)', md:'repeat(2, 1fr)'}}
          spacing={10}
        >
        {
          projects.map(project => (
            <GridItem 
              key={project.id}
              as={motion.div}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }} 
              borderRadius='3xl' 
            >
              <VStack  
                as={motion.div} 
                variants={variants}
                spacing='6'
                px='4' 
                py='6'
              >
                <VStack spacing='4'>
                  <Text fontWeight='lighter' fontSize='2xl'>
                    {project.title}
                  </Text>
                  <Text>
                    {project.description}
                  </Text>
                  <HStack>
                    {project.tecnologies.map(tecnology => (
                      <Tag key={tecnology}>{tecnology}</Tag>
                    ))
                    }
                  </HStack>
                </VStack>
              
                <HStack  as={motion.div} variants={variants}>
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                  >
                    <Link href={project.link} isExternal>
                      <Icon cursor="pointer" h={6} w={6} as={FaExternalLinkAlt} />
                    </Link>
                  </motion.div>

                  <Spacer/>

                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.3 }}
                  >
                    <Link href={project.github} isExternal>
                      <Icon cursor="pointer" h={8} w={8} as={FiGithub} />
                    </Link>
                  </motion.div>

                </HStack>
              </VStack>
            </GridItem>
          ))
        }
        </Grid>
      </VStack>
      <Stack initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        as={motion.div} 
        variants={variants}
      >
        <Button as={motion.a} href='https://example.com' target='__blank' variant="outline">
          View More
        </Button>
      </Stack>
    </Stack>
  );
};
