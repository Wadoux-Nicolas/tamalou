import {Box, Card, CardBody, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import {Patient} from "../models/patient.ts";
import { FaStethoscope } from "react-icons/fa6";


const PatientCard = (
    {
        patient
    }: { patient: Patient }
) => {
    return (
        <Card>
            <CardBody>
                <Stack
                    divider={
                        <StackDivider/>
                    }
                    spacing='2'
                >
                    <Box>
                        <Heading size='xs'>
                            {patient.firstName} {patient.lastName}
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {patient.age} ans, {patient.nationality}, {patient.height} cm, {patient.weight} kg
                        </Text>
                    </Box>
                    <Box>
                        <FaStethoscope/>
                        <Text pt='2' fontSize='sm'>
                            {patient.pathologiesSummary}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
};


export default PatientCard;