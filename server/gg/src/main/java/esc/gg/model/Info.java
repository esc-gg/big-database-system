package esc.gg.model;

import lombok.Getter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
public class Info {
    private Long gameCreation;
    private Long gameDuration;
    private Long gameEndTimestamp;
    private String gameMode;
    private List<Participants> participants;
}
