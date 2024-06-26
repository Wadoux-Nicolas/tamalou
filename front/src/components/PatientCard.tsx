import {Card, CardBody, Flex, Text} from "@chakra-ui/react";
import {Patient} from "../models/patient.ts";
import {FaStethoscope} from "react-icons/fa6";
import CustomButton from "./CustomButton.tsx";


const PatientCard = (
    {
        patient
    }: { patient: Patient }
) => {
    return (
        <Card variant={"elevated"} size={"sm"}>
            <CardBody>
                <Flex flexDirection="column" mb={2}>
                    <Text size='xs'>
                        {patient.firstName} {patient.lastName}
                    </Text>
                    <Text fontSize='xs' color={"grey"}>
                        {patient.age} ans, {patient.nationality}, {patient.height} cm, {patient.weight} kg
                    </Text>
                </Flex>
                <Flex gap={2}>
                    <CustomButton
                        width={"20px"}
                        height={"20px"}
                        iconColor={"white"}
                        bgColor={"green.main"}
                        icon={FaStethoscope}
                    />
                    <Text pt='2' fontSize='xs'>
                        {patient.pathologiesSummary}
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    );
};


export default PatientCard;