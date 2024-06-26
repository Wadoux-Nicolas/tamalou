import {Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import {Patient} from "../models/patient.ts";

const PatientCard = (
    {
        patient
    }: { patient: Patient }
) => {
    return (
        <Card>
            <CardHeader
                pb={0}
            >
                <Heading size='md' color="blue.main">
                    FICHE PATIENT
                </Heading>
            </CardHeader>

            <CardBody>
                <Stack
                    divider={
                        <StackDivider/>
                    }
                    spacing='4'
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
                        <Heading size='xs'>
                            Pathologies
                        </Heading>
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