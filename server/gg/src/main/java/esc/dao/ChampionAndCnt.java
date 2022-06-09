package esc.dao;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChampionAndCnt {
    private ChampWin _id;
    private int count;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ChampWin{
        private String champ_id;
        private boolean win_id;
    }
}
