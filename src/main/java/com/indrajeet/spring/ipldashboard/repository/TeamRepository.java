package com.indrajeet.spring.ipldashboard.repository;

import java.util.List;

import com.indrajeet.spring.ipldashboard.model.Team;

import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team,Long>{
    
    Team findByTeamName(String teamName);

     List<Team> findAllByOrderByTotalWinsDesc();
}
