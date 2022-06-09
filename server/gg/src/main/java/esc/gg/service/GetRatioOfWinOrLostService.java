package esc.gg.service;

import esc.dao.NumOfWinOrLost;
import esc.gg.dto.WinOrLostDto;
import esc.gg.repository.MatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetRatioOfWinOrLostService {
    private final MatchRepository matchRepository;

    public WinOrLostDto getRatio(String summonerName){
        List<NumOfWinOrLost> cntOfGamesWon = matchRepository.findCntOfGamesWon(summonerName);
        WinOrLostDto winOrLostDto = new WinOrLostDto();
        if(cntOfGamesWon.get(0).is_id()) {
            winOrLostDto.setWin(cntOfGamesWon.get(0).getTotalWinCount());
            winOrLostDto.setLost(cntOfGamesWon.get(1).getTotalWinCount());
        }
        else{
            winOrLostDto.setLost(cntOfGamesWon.get(0).getTotalWinCount());
            winOrLostDto.setWin(cntOfGamesWon.get(1).getTotalWinCount());
        }
        return winOrLostDto;
    }
}
