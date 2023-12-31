package com.esprit.chambre.Repository;

import com.esprit.chambre.Entity.Chambre;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ChambreRepo extends JpaRepository<Chambre,Long> {


}
