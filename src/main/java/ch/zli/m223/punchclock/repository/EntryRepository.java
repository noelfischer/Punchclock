package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EntryRepository extends JpaRepository<Entry, Long> {

    @Query("SELECT count(e) FROM Entry e")
    int entryCount();
}
