package esc.gg.dto;

import lombok.Builder;
import lombok.Data;
import java.util.List;

@Data
public class MatchPreviewDto {
    private String gameMode;            // 게임 모드 {CLASSIC, ARAM}
    private Long gameDuration;           // 게임 시간
    private Long gameCreation;           // 게임 생성 시간
    private String championName;        // 챔피온 이름
    private boolean win;                // 게임에서 이겼는지 여부, true면 이긴 것
    private int kills;                  // kill 수
    private int deaths;                 // death 수
    private int assists;                // assist 수
    private List<String>summonerList;   // 소환수 이름

    @Builder
    public MatchPreviewDto(String gameMode, boolean win, Long gameDuration, Long gameCreation, String championName, int kills, int deaths, int assists, List<String> summonerList) {
        this.gameMode = gameMode;
        this.gameDuration = gameDuration;
        this.gameCreation = gameCreation;
        this.win = win;
        this.championName = championName;
        this.kills = kills;
        this.deaths = deaths;
        this.assists = assists;
        this.summonerList = summonerList;
    }
}
