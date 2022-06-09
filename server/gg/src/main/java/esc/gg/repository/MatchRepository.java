package esc.gg.repository;

import esc.dao.ChampionAndCnt;
import esc.dao.Lane;
import esc.dao.NumOfWinOrLost;
import esc.gg.model.Match;
import org.springframework.data.mongodb.repository.Aggregation;
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

    /**
     * @param summonerName
     * @return
     * [
     *   {
     *      summonerName : ,
     * 		championName : ,
     * 		kills : ,
     * 		deaths : ,
     * 	    assists : ,
     * 		totalDamageDealt : ,
     * 		totalDamgeTaken : ,
     *    },
     * ]
     */
    @Query(value = "{'info.participants.summonerName': ?0}",
            fields = "{'info.participants.summonerName' : 1, 'info.participants.championName' : 1, " +
                    "'info.participants.assists' : 1, 'info.participants.deaths' : 1, 'info.participants.kills' : 1," +
                    "'info.participants.totalDamageDealt' : 1, 'info.participants.totalDamageTaken'}")
    List<Match> findEachPlayerDetailsBySname(String summonerName);

    @Query(value = "{'info.participants.summonerName':?0}", fields = "{_id:0, 'info.gameDuration' : 1}")
    List<Match> findGameDurationOfMatch(String summonerName);

    @Aggregation(pipeline = {"{'$unwind':{path:'$info.participants'}}","{'$match':{'info.participants.summonerName':?0}}","{'$group':{_id:'$info.participants.lane','count':{'$sum':1}}}"})
    List<Lane> findPlayedLane(String summonerName);

    @Aggregation(pipeline = {"{'$unwind':{path:'$info.participants'}}","{'$match':{'info.participants.summonerName':?0}}","{'$group':{_id:'$info.participants.win','totalWinCount':{'$sum':1}}}"})
    List<NumOfWinOrLost> findCntOfGamesWon(String summonerName);

    @Aggregation(pipeline = {"{'$unwind':{path:'$info.participants'}}", "{'$match':{'info.participants.summonerName':?0}}",
            "{'$group':{champ_id:'$info.participants.championName', win_id:'$info.participants.win'}, count:{$sum:1}}",
            "{'$sort':{champ_id:-1}}"})
    List<ChampionAndCnt> findChampionWinOrLostRate(String summonerName);
}