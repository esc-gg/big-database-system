package esc.gg.controller;

import esc.gg.dto.MatchPreviewDto;
import esc.gg.model.Match;
import esc.gg.repository.MatchRepository;
import esc.gg.service.GetMatchPreviewsBySnameService;
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

    @GetMapping("/search/{summonerName}")
    public ResponseEntity<?> getMatchPreviewDatas(@PathVariable String summonerName){
        ArrayList<MatchPreviewDto> matchPreviewsBySname = getMatchPreviewsBySnameService.getMatchPreviewsBySname(summonerName);
        return new ResponseEntity<>(matchPreviewsBySname, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAll(){
        List<Match> matches = matchRepository.findAll();
        return new ResponseEntity<>(matches, HttpStatus.OK);
    }
}
