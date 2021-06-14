import { useState, useMemo } from 'react';
import { UserShortInerface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';

export default function useIndex() {
    const [cep, setCep] = useState(''),
        cepValido = useMemo(() => {
            return ValidationService.cep(cep);
        }, [cep]),
        [erro, setErro] = useState(''),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiaristas] = useState([] as UserShortInerface[]),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);


    return {
        cep, setCep, cepValido,
    };
}