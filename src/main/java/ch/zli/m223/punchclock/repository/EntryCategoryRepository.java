package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.EntryCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EntryCategoryRepository extends JpaRepository<EntryCategory, Long> {
}
