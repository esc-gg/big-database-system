package esc.gg.service;

import esc.dao.Lane;
import esc.gg.repository.MatchRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetFavoritePlayerLaneService {

    private final MatchRepository matchRepository;

    public String getFavoritePlayerLane(String summonerName){
        List<Lane> playedLane = matchRepository.findPlayedLane(summonerName);
        String favoritePlayerLane = "";
        int compareCnt = 0;
        for(Lane l : playedLane){
            if(compareCnt < l.getCount()){
                favoritePlayerLane = l.get_id();
                compareCnt = l.getCount();
            }
        }
        return favoritePlayerLane;
    }
}
