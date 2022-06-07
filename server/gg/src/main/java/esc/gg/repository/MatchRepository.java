package esc.gg.repository;

import esc.gg.model.Info;
import esc.gg.model.Match;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

/**
 * MatchRepository
 * 는 MongoRepository를 상속받은 interface로
 * Json Query method 들로 이루어져 있다
 */

public interface MatchRepository extends MongoRepository<Match,String> {

    @Query(value = "{'info.participants.summonerName':?0}")
    List<Match> findMatchesBySname(String summonerName);

}
