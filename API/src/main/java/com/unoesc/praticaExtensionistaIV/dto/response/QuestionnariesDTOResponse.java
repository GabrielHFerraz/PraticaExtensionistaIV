package com.unoesc.praticaExtensionistaIV.dto.response;

import lombok.Data;
import java.util.UUID;

@Data
public class QuestionnariesDTOResponse {

    private UUID id;
    private Integer cd;
    private String titulo;
    private String descr;

}
