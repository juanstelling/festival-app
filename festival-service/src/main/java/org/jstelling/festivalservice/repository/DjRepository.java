package org.jstelling.festivalservice.repository;

import org.jstelling.festivalservice.model.Dj;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DjRepository extends JpaRepository<Dj, Long> { }
