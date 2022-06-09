package esc.gg.model;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "data")
@Getter
public class Match {

    @Id
    private String id;

    private Info info;

    @Override
    public String toString() {
        return "Match [id=" + id + "]";
    }
}
