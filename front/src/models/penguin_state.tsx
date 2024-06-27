export enum PenguinStateByName {
    NORMAL = 'normal',
    DIARRHEA = 'diarrhé',
    ALERT = 'alerte',
    SWEATY = 'sueur',
    FEVERISH = 'fievreux',
    BLEEDING = 'saignement',
    VOMITING = 'vomissements',
    FATIGUE = 'fatigue',
    DEPRESSION = 'depression',
    PAIN = 'douleur',
    WAITING_FOR_CARE = 'en_attente_de_soins',
}

export const getStateFromString = (value: string): PenguinStateByName|undefined => {
    for (const stateStr in PenguinStateByName) {
        const stateKey: keyof typeof PenguinStateByName = stateStr as keyof typeof PenguinStateByName;
        if (PenguinStateByName[stateKey] === value) {
            return PenguinStateByName[stateKey];
        }
    }

    return undefined;
}