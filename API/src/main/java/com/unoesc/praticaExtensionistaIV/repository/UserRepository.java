package com.unoesc.praticaExtensionistaIV.repository;


import com.unoesc.praticaExtensionistaIV.entities.UserEntitie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserEntitie, UUID> {
    Optional<UserEntitie> findByUsername(String username);
}
