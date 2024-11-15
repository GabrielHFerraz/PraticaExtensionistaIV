package edu.gabrielferraz.ProjetoExtensaoIV.dto.response;

import lombok.Data;

@Data
public class ErrorMessageDTO {

    public ErrorMessageDTO(String message, String field) {
        this.message = message;
        this.fieldName = field;
    }

    private String message;
    private String fieldName;
}
