
"use client";

import { Accordion } from "keep-react";


export const AccordionComponent = () => {
  return (
     <Accordion className="bg-blue-950 space-y-4 border-none" collapseAll={false} alwaysOpen={true}>
      <Accordion.Panel>
        <Accordion.Title className=" text-blue-400 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 rounded-md">
        What courses does Skill Dynamo offer?
        </Accordion.Title>
        <Accordion.Content className="border-x-2 border-b-2 border-blue-400">
          <p className="text-gray-300">
          Skill Dynamo provides a diverse range of courses to cater to different interests and career paths. Our offerings include courses in web development, programming, finance, accounting, and more. You can explore our course catalog to find the perfect learning path for your aspirations.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      
      <Accordion.Panel>
        <Accordion.Title className=" text-blue-400 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-900 rounded-md">
        How can I enroll in a course on Skill Dynamo?
        </Accordion.Title>
        <Accordion.Content className="border-x-2 border-b-2 border-blue-400">
          <p className="text-gray-300">
          Enrolling in a course at Skill Dynamo is simple! Visit our website, browse through the available courses, and select the one that aligns with your goals. Click on the course to view details, and you'll find an enrollment option there. Follow the prompts to complete the enrollment process and start your learning journey.
          </p>
        </Accordion.Content>
      </Accordion.Panel>


      <Accordion.Panel>
        <Accordion.Title className=" text-blue-400 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 rounded-md">
        Are there any prerequisites for the courses on Skill Dynamo?
        </Accordion.Title>
        <Accordion.Content className="border-x-2 border-b-2 border-blue-400">
          <p className="text-gray-300">
          The prerequisites for courses on Skill Dynamo vary depending on the specific course. While some courses may be suitable for beginners, others might require a certain level of prior knowledge or experience. Check the course description and prerequisites section on the course page for detailed information. We aim to provide a diverse range of courses suitable for learners at different skill levels.
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className=" text-blue-400 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-900 rounded-md">
       Is there any support available for students during their learning journey?
        </Accordion.Title>
        <Accordion.Content className="border-x-2 border-b-2 border-blue-400">
          <p className="text-gray-300">
          Absolutely! Skill Dynamo is committed to supporting students throughout their learning journey. We offer a range of resources, including discussion forums, Q&A sessions, and dedicated support channels. If you have questions about the course content, assignments, or any technical issues, our support team is here to assist you. Additionally, our community provides a platform for learners to connect, share experiences, and collaborate.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=" text-blue-400 bg-gradient-to-r from-blue-900 via-blue-950 to-blue-950 rounded-md">
        Can I access course materials on Skill Dynamo at any time, and are there deadlines for assignments?
        </Accordion.Title>
        <Accordion.Content className="border-x-2 border-b-2 border-blue-400">
          <p className="text-gray-300">
          Yes, one of the benefits of Skill Dynamo is the flexibility it offers. You can access course materials at any time that suits your schedule. Our platform is designed to accommodate learners from around the world in different time zones. While there are suggested timelines for completing assignments to help you stay on track, many courses are self-paced, allowing you to learn at your own speed. This flexibility ensures that learning with Skill Dynamo fits seamlessly into your busy lifestyle.
          </p>
        </Accordion.Content>
      </Accordion.Panel>


    </Accordion>
  );
};
