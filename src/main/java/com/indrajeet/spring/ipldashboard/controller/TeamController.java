package com.indrajeet.spring.ipldashboard.controller;

import java.time.LocalDate;
import java.util.List;

import com.indrajeet.spring.ipldashboard.model.Match;
import com.indrajeet.spring.ipldashboard.model.Team;
import com.indrajeet.spring.ipldashboard.repository.MatchRepository;
import com.indrajeet.spring.ipldashboard.repository.TeamRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class TeamController {


    private TeamRepository teamRepository;

    private MatchRepository matchRepository;


    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }
    
    @GetMapping("/team")
    public Iterable<Team> getAllTeam() {
        // return this.teamRepository.findAll();
        return this.teamRepository.findAllByOrderByTotalWinsDesc();
    }
    

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName, 4));

        return team;

    }
    
    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate , endDate);
        
    }
    
}

