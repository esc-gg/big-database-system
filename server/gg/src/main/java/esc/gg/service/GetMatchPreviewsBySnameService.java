package esc.gg.service;

import esc.gg.dto.MatchPreviewDto;
import esc.gg.model.Info;
import esc.gg.model.Match;
import esc.gg.model.Participants;
import esc.gg.repository.MatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * SearchBySnameService
 * 는 SummonerName(소환수 이름)을 통해서 전적을 검색 시에 출력되는 정보들을
 * 위한 class이다
 */

@Service
@RequiredArgsConstructor
public class GetMatchPreviewsBySnameService {

    private final MatchRepository matchRepository;

    public ArrayList<MatchPreviewDto> getMatchPreviewsBySname(String summonerName){
        List<Match> matches = matchRepository.findMatchesBySname(summonerName);
        if(matches.isEmpty()) throw new IllegalArgumentException();
        ArrayList<MatchPreviewDto> matchPreviewDtos = new ArrayList<>();
        for(Match match : matches){
            matchPreviewDtos.add(convertingInfoToDto(match.getInfo(), summonerName));
        }
        return matchPreviewDtos;
    }

    private MatchPreviewDto convertingInfoToDto(Info info, String summonerName){
        MatchPreviewDto.MatchPreviewDtoBuilder builder = MatchPreviewDto.builder();

        builder.gameMode(info.getGameMode());
        builder.gameDuration(info.getGameDuration());
        builder.gameCreation(info.getGameCreation());

        List<String> summonerList = new ArrayList<>();
        for(Participants participant : info.getParticipants()){
            summonerList.add(participant.getSummonerName());
            if(participant.getSummonerName().equals(summonerName)){
                builder.deaths(participant.getDeaths());
                builder.kills(participant.getKills());
                builder.assists(participant.getAssists());
                builder.championName(participant.getChampionName());
                builder.win(participant.isWin());
            }
        }
        builder.summonerList(summonerList);
        return builder.build();
    }
}
