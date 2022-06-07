package esc.gg.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class MatchParticipantInfo {
    private boolean win;                // 게임에서 이겼는지 여부, true면 이긴 것
    private String championName;        // 챔피온 이름
    private int kills;                  // kill 수
    private int deaths;                 // death 수
    private int assists;                // assist 수

    @Builder
    public MatchParticipantInfo(boolean win, String championName, int kills, int deaths, int assists) {
        this.win = win;
        this.championName = championName;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
    }
}
