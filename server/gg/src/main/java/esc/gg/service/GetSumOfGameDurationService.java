package esc.gg.service;

import esc.gg.model.Match;
import esc.gg.repository.MatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetSumOfGameDurationService {

    private final MatchRepository matchRepository;

    public Long getSumOfGameDuration(String summonerName){
        List<Match> gameDurationOfMatch = matchRepository.findGameDurationOfMatch(summonerName);
        Long sumOfDuration = 0L;
        for(Match m : gameDurationOfMatch)
            sumOfDuration += m.getInfo().getGameDuration();
        return sumOfDuration;
    }
}
