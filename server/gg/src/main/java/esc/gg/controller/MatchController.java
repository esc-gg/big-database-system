package esc.gg.controller;

import esc.gg.dto.DurationResponseDto;
import esc.gg.dto.LaneResponeDto;
import esc.gg.dto.MatchPreviewDto;
import esc.gg.dto.WinOrLostDto;
import esc.gg.model.Match;
import esc.gg.repository.MatchRepository;
import esc.gg.service.GetFavoritePlayerLaneService;
import esc.gg.service.GetMatchPreviewsBySnameService;
import esc.gg.service.GetRatioOfWinOrLostService;
import esc.gg.service.GetSumOfGameDurationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequiredArgsConstructor
@RequestMapping(value = "/api/match", produces = "application/json; charset=utf8")
public class MatchController {

    private final MatchRepository matchRepository;
    private final GetMatchPreviewsBySnameService getMatchPreviewsBySnameService;
    private final GetSumOfGameDurationService getSumOfGameDurationService;
    private final GetFavoritePlayerLaneService getFavoritePlayerLaneService;
    private final GetRatioOfWinOrLostService getRatioOfWinOrLostService;

    @GetMapping("/search/{summonerName}")
    public ResponseEntity<?> getMatchPreviewDatas(@PathVariable String summonerName){
        ArrayList<MatchPreviewDto> matchPreviewsBySname = getMatchPreviewsBySnameService.getMatchPreviewsBySname(summonerName);
        return new ResponseEntity<>(matchPreviewsBySname, HttpStatus.OK);
    }

    @GetMapping("/duration/{summonerName}")
    public ResponseEntity<?> getSumOfGameDurations(@PathVariable String summonerName){
        Long sumOfGameDuration = getSumOfGameDurationService.getSumOfGameDuration(summonerName);
        DurationResponseDto dto = new DurationResponseDto(sumOfGameDuration);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/lane/{summonerName}")
    public ResponseEntity<?> getFavoritePlayerLane(@PathVariable String summonerName){
        String favoritePlayerLane = getFavoritePlayerLaneService.getFavoritePlayerLane(summonerName);
        LaneResponeDto dto = new LaneResponeDto(favoritePlayerLane);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/total/{summonerName}")
    public ResponseEntity<?> getRatioOfWinOrLost(@PathVariable String summonerName){
        WinOrLostDto ratio = getRatioOfWinOrLostService.getRatio(summonerName);
        return new ResponseEntity<>(ratio, HttpStatus.OK);
    }
}
